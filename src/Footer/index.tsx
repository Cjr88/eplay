import { Container, FooterSection, Link, Links, SectionTitle } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categoria</SectionTitle>
        <Links>
          <li>
            <Link to="/categories#rpg">RPG</Link>
          </li>
          <li>
            <Link to="/categories#action">ACÃO</Link>
          </li>
          <li>
            <Link to="/categories#fight">LUTA</Link>
          </li>
          <li>
            <Link to="/categories#sports">ESPORTES</Link>
          </li>
          <li>
            <Link to="/categories#simulation">SIMULAÇÃO</Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rapido</SectionTitle>
        <Links>
          <li>
            <Link to="/#on-sale">PROMOÇÕES</Link>
          </li>
          <li>
            <Link to="/#coming-soon">EM BREVE</Link>
          </li>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados. </p>
    </div>
  </Container>
)

export default Footer
