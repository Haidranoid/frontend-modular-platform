import styled from 'styled-components'

export const Bar = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;

  display: flex;
  align-items: center;
  gap: 8px;

  height: 34px;
  padding: 0 10px;
  margin-bottom: 10px;

  background: linear-gradient(#e5e5e5, #cfcfcf);
  border-bottom: 1px solid #aaa;

  font-family: monospace;
  font-size: 12px;
  color: #222;
`

export const NavButton = styled.div`
  text-align: center;
  width: 14px;
  height: 14px;
  border-radius: 3px;
  background: linear-gradient(#fafafa, #bdbdbd);
  border: 1px solid #888;
`

export const AddressBar = styled.div`
  flex: 1;
  height: 22px;
  padding: 2px 6px;

  background: #fff;
  border: 1px solid #999;
  border-radius: 3px;

  display: flex;
  align-items: center;

  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`
