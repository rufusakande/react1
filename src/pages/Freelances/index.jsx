import DefaultPicture from '../../assets/logo.svg'
import Card from '../../components/Card'
import styled from 'styled-components'

const freelanceProfiles = [
  {
      name: 'Jane Doe',
      jobTitle: 'Devops',
      picture: DefaultPicture,
  },
  {
      name: 'John Doe',
      jobTitle: 'Developpeur frontend',
      picture: DefaultPicture,
  },
  {
      name: 'Jeanne Biche',
      jobTitle: 'Développeuse Fullstack',
      picture: DefaultPicture,
  },
]

const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    align-items:center;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
`
function Freelances() {
  return (
    <CardsContainer>
      <h1>Freelances 👩‍💻👨‍💻👩‍💻</h1>
      {
        freelanceProfiles.map((profile, index) => (
          <Card  
            key={`${profile.name} - ${index}`}
            label={profile.jobTitle}
            picture = {profile.picture}
            title = {profile.name}
          />
        ))
      }
    </CardsContainer>
  )
}

export default Freelances
