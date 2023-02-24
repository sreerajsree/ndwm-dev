import Footer from '../components/Footer'
import SectionContainer from '../components/SectionContainer'


export default function HomeLayout({ children }) {
  return (
    <SectionContainer>
      <div className="flex flex-col justify-evenly pt-6 md:pt-9">
        <main>{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}
