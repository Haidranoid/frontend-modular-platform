// typescriptGuide.test.ts
// 🧩 Guía definitiva de TypeScript con ejemplos prácticos y unit tests

// =============================================================
// 🔹 1. Keywords
// =============================================================
describe('Keywords & Utilities Básicas', () => {
  it('typeof - Extrae el tipo de un valor', () => {
    // 📌 Se usa para obtener el tipo de una variable en tiempo de compilación
    const user = { id: 1, name: 'Edu' }
    type User = typeof user
    const u: User = { id: 2, name: 'Ana' }
    expect(u.id).toBe(2)
  })

  it('keyof<T> - Devuelve claves como union', () => {
    // 📌 Convierte las propiedades de un objeto en un union de strings
    type User = { id: number; name: string }
    type Keys = keyof User // "id" | "name"
    const k: Keys = 'name'
    expect(k).toBe('name')
  })

  it('in - Itera sobre claves (mapped types)', () => {
    // 📌 Permite recorrer propiedades para crear nuevos tipos
    type Flags<T> = { [K in keyof T]: boolean }
    type F = Flags<{ a: number; b: string }>
    const f: F = { a: true, b: false }
    expect(f.a).toBe(true)
  })

  it('extends - Restricciones / condiciones en tipos', () => {
    // 📌 Sirve para limitar genéricos o evaluar condicionales
    type IsString<T> = T extends string ? true : false
    type A = IsString<'hi'> // true
    type B = IsString<number> // false
    const a: A = true
    const b: B = false
    expect(a).toBe(true)
    expect(b).toBe(false)
  })

  it('as - Casting o type assertion', () => {
    // 📌 Convierte un tipo en otro (usado con cuidado)
    const v = '123' as unknown as number
    expect(typeof v).toBe('number')
  })

  it('satisfies - Valida sin perder literales', () => {
    // 📌 Verifica que cumpla un contrato, pero preserva literales
    const config = {
      url: 'https://api',
      retry: 3,
    } satisfies { url: string; retry?: number }
    expect(config.retry).toBe(3)
  })
})

// =============================================================
// 🔹 2. Awaited e Infer
// =============================================================
describe('Awaited e Infer', () => {
  it('Awaited<T> - Resuelve tipo de una Promise', async () => {
    // 📌 Extrae el tipo interno de una promesa
    type Res = Awaited<Promise<string>>
    const value: Res = 'ok'
    expect(value).toBe('ok')
  })

  it('infer - Captura un tipo dentro de condicional', () => {
    // 📌 `infer` actúa como placeholder para capturar tipos
    type GetPromise<T> = T extends Promise<infer U> ? U : never
    type R = GetPromise<Promise<number>>
    const n: R = 123
    expect(n).toBe(123)
  })
})

// =============================================================
// 🔹 3. Utility Types para objetos
// =============================================================
describe('Utility Types Objetos', () => {
  it('Partial<T> - Hace todas las props opcionales', () => {
    type User = { id: number; name: string }
    const u: Partial<User> = { name: 'Eduardo' }
    expect(u.name).toBe('Eduardo')
  })

  it('Required<T> - Hace todas las props obligatorias', () => {
    type Config = { url?: string }
    const c: Required<Config> = { url: 'https://api' }
    expect(c.url).toContain('http')
  })

  it('Readonly<T> - Hace todas las props inmutables', () => {
    type State = { count: number }
    const s: Readonly<State> = { count: 1 }
    // s.count = 2 // ❌ Error
    expect(s.count).toBe(1)
  })

  it('Pick<T, K> - Extrae solo ciertas props', () => {
    type User = { id: number; name: string; email: string }
    type PublicUser = Pick<User, 'id' | 'name'>
    const p: PublicUser = { id: 1, name: 'Alice' }
    expect(p.name).toBe('Alice')
  })

  it('Omit<T, K> - Elimina ciertas props', () => {
    type User = { id: number; name: string; email: string }
    type NoEmail = Omit<User, 'email'>
    const n: NoEmail = { id: 2, name: 'Bob' }
    expect(n.id).toBe(2)
  })

  it('Record<K, T> - Objeto con claves K y valores T', () => {
    type R = Record<string, number>
    const r: R = { a: 1, b: 2 }
    expect(Object.keys(r)).toContain('a')
  })
})

// =============================================================
// 🔹 4. Uniones
// =============================================================
describe('Manipulación de Uniones', () => {
  it('Exclude<T, U> - Excluye de T lo que esté en U', () => {
    type T = Exclude<'a' | 'b' | 'c', 'b'>
    const v: T = 'a'
    expect(v).toBe('a')
  })

  it('Extract<T, U> - Extrae lo que T y U comparten', () => {
    type T = Extract<'a' | 'b', 'b' | 'c'>
    const v: T = 'b'
    expect(v).toBe('b')
  })

  it('NonNullable<T> - Remueve null y undefined', () => {
    type T = NonNullable<string | null>
    const v: T = 'ok'
    expect(v).toBe('ok')
  })
})

// =============================================================
// 🔹 5. Funciones y Constructores
// =============================================================
describe('Funciones y Constructores', () => {
  it('Parameters<T> - Devuelve parámetros de una función', () => {
    function sum(a: number, b: number) {
      return a + b
    }
    type P = Parameters<typeof sum>
    const args: P = [1, 2]
    expect(sum(...args)).toBe(3)
  })

  it('ReturnType<T> - Tipo de retorno de una función', () => {
    function makeUser() {
      return { id: 1, name: 'Ana' }
    }
    type User = ReturnType<typeof makeUser>
    const user: User = { id: 2, name: 'Luis' }
    expect(user.name).toBe('Luis')
  })

  it('ConstructorParameters<T> - Parámetros de constructores', () => {
    class Person {
      constructor(
        public name: string,
        public age: number,
      ) {}
    }
    type P = ConstructorParameters<typeof Person>
    const args: P = ['Luna', 30]
    const p = new Person(...args)
    expect(p.age).toBe(30)
  })

  it('InstanceType<T> - Instancia de una clase', () => {
    class Person {
      constructor(public name: string) {}
    }
    type P = InstanceType<typeof Person>
    const p: P = new Person('Leo')
    expect(p.name).toBe('Leo')
  })
})

// =============================================================
// 🔹 6. Intrinsics de string
// =============================================================
describe('Intrinsic String Manipulation', () => {
  it('Uppercase<T> / Lowercase<T>', () => {
    type U = Uppercase<'hi'>
    type L = Lowercase<'BYE'>
    const u: U = 'HI'
    const l: L = 'bye'
    expect(u).toBe('HI')
    expect(l).toBe('bye')
  })

  it('Capitalize<T> / Uncapitalize<T>', () => {
    type C = Capitalize<'hola'>
    type UC = Uncapitalize<'HOLA'>
    const c: C = 'Hola'
    const uc: UC = 'hOLA'
    expect(c[0]).toBe('H')
    expect(uc[0]).toBe('h')
  })
})

// =============================================================
// 🔹 7. Underground & Meta-programming
// =============================================================
describe('Underground / Meta-programming', () => {
  it('NoInfer<T> - Evita inferencia automática', () => {
    // 📌 Fuerza que T NO se infiera, obliga a que se pase explícito
    type NoInfer<T> = [T][T extends any ? 0 : never]

    function choose<T>(value: T, check: NoInfer<T>) {
      return value
    }
    const r = choose('hi', 'hi') // ✅ funciona porque coinciden
    expect(r).toBe('hi')
  })

  it('ThisType<T> - Controla el tipo de `this` en objetos', () => {
    type Point = { x: number; y: number }
    type PointOps = { move(dx: number, dy: number): void }

    const obj: Point & ThisType<Point & PointOps> = {
      x: 0,
      y: 0,
      //@ts-ignore
      move(dx, dy) {
        this.x += dx
        this.y += dy
      }, // this: Point & PointOps
    }

    //@ts-ignore
    obj.move(5, 10)
    expect(obj.y).toBe(10)
  })

  it('Branding types - Tipado nominal en sistema estructural', () => {
    type Brand<T, B> = T & { __brand: B }
    type UserId = Brand<number, 'UserId'>
    const id = 123 as UserId
    expect(typeof id).toBe('number')
  })

  it('Flavored types - Variante más flexible de branding', () => {
    type Flavored<T, Flavor> = T & { _flavor?: Flavor }
    type Email = Flavored<string, 'email'>
    const e: Email = 'test@x.com' as Email
    expect(e.includes('@')).toBe(true)
  })

  it('Distributive conditional types - Distribuye sobre uniones', () => {
    type ToArray<T> = T extends any ? T[] : never
    type R = ToArray<string | number> // string[] | number[]
    const a: R = [1, 2] // ✅ acepta number[]
    expect(a[0]).toBe(1)
  })

  it('Never tricks - Detectar si un tipo es `never`', () => {
    type IsNever<T> = [T] extends [never] ? true : false
    type A = IsNever<never> // true
    type B = IsNever<string> // false
    const a: A = true
    const b: B = false
    expect(a).toBe(true)
    expect(b).toBe(false)
  })

  it('asserts / is - Narrowing de tipos en funciones', () => {
    function isString(x: unknown): x is string {
      return typeof x === 'string'
    }
    const val: unknown = 'hola'
    if (isString(val)) {
      expect(val.toUpperCase()).toBe('HOLA')
    }
  })
})
