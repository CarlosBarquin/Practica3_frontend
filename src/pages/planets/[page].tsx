import Form from '@/components/form';
import { GetServerSideProps } from 'next';

type serverProps = {
  params: {
    page: string
  }
}

export async function getServerSideProps(props: serverProps) {
  const page = props.params.page
  const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`)
  const data = await res.json()

  return { props: { data, page } }
}

type planetProps = {
  name: string
}

const Index = ({ data, page }: { data: { results: planetProps[] }, page: string }) => {
  const planets = data.results.map((planet: planetProps) => {
    return planet.name
  })

  return (
    <>
      <h1>Planets - Page {page}</h1>
      <Form data={planets} page={page} />
    </>
  )
}

export default Index
