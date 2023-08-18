import { Container, TitleH2 } from './styles'

export type Props = {
  title: string
  background: 'black' | 'gray'
  children: JSX.Element
}

const Section = ({ title, background, children }: Props) => (
  <Container background={background}>
    <div className="container">
      <TitleH2>{title}</TitleH2>
      {children}
    </div>
  </Container>
)
export default Section
