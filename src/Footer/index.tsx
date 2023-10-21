import * as S from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <S.Container>
    <div className="container">
      <S.FooterSection>
        <S.SectionTitle>Categoria</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link
              title="Clique aqui para acessar a categoria de RPG"
              to="/categories#rpg"
            >
              RPG
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar a categoria de Ação"
              to="/categories#action"
            >
              ACÃO
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar a categoria de Luta"
              to="/categories#fight"
            >
              LUTA
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar a categoria de Esportes"
              to="/categories#sports"
            >
              ESPORTES
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar a categoria de Simulação"
              to="/categories#simulation"
            >
              SIMULAÇÃO
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <S.FooterSection>
        <S.SectionTitle>Acesso rapido</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link
              title="Clique aqui para acessar a categoria de Promoções"
              to="/#on-sale"
            >
              PROMOÇÕES
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar a categoria de Em breve"
              to="/#coming-soon"
            >
              EM BREVE
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados. </p>
    </div>
  </S.Container>
)

export default Footer
