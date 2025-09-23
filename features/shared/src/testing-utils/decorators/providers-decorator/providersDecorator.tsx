import { DecoratorFunction } from 'storybook/internal/csf'
import { withRedux } from '../redux-decorator'
import { withRouter } from '../router-decorator'
import { withTheme } from '../theme-decorator'
import { withContextBox } from '../context-box-decorator'

export const withProviders: DecoratorFunction = (_Story, _context) => {
  return [withRedux, withRouter, withTheme, withContextBox]
}
