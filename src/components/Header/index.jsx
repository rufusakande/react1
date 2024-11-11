import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderLink = styled(Link)`
  padding:5px;
  font-size:24px;
  color:green;
  ${({isFulled}) => isFulled && `color:blue; text-decoration:none;`}

`
function Header() {
  return (
    <nav>
      <HeaderLink to="/">Accueil</HeaderLink>
      <HeaderLink to="/survey/1" isFulled>Questionnaire</HeaderLink>
      <HeaderLink to="/freelances">Profils</HeaderLink>
    </nav>
  )
}

export default Header
