import styled from 'styled-components'

type StyledProps = {
  width: string
  height: string
  [props: string]: string | unknown
  alt: boolean
}

const Base = styled.button<StyledProps>`
  width: ${(props) => props.width || '9em'};
  height: ${(props) => props.height || '3em'};

  border: none;

  font-weight: 700;
  font-size: 1em;
`

const Regular = styled(Base)`
  color: var(--bg);
  background: var(--sg);
  box-shadow: ${(props) => props.theme.shadow.light};
`

const Void = styled(Base)`
  background: none;

  color: ${(props) => (props.alt ? 'var(--hg)' : '')};
`

export const S = {
  Regular,
  Void
}
