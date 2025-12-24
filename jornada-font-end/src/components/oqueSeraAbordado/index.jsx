import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './styleOqueSeraAbordado.css'

gsap.registerPlugin(ScrollTrigger)

export function OqueSeraAbordado() {
  const sectionRef = useRef(null)
  const pathRef = useRef(null)

//   Aqui começa a brincadeira pós o Gsap só pode ser animado após o DOM 
  useEffect(() => { 
      // Pega o tamanho real do SVG
    const path = pathRef.current
    const length = path.getTotalLength()

    // Prepara a SVG pra animação 
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    })

    // anima a linha com o scroll
    gsap.to(path, {
      strokeDashoffset: 1,
    //   Aqui começa o ScrollTrigger
      scrollTrigger: { 
        trigger: sectionRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    })

    // anima os cards
    gsap.utils.toArray('.card').forEach(card => {
        // Entrada suave dos cards
      gsap.fromTo(
        card,
        { opacity: 0.8, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
        //   Trigger individual por card
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
          },
        }
      )
    })
  }, [])

  return (
    <>
        <div className="TituloDaSection">
            <h1>O que será abordado <br />nas <span>aulas?</span></h1>
        </div>

    <section className="assuntosAbordados" ref={sectionRef}>
        {/* configuração do svg */}
      <svg className="linha" viewBox="0 0 600 900" fill="none">
        <path
          ref={pathRef}
          d="
            M 100 100
            L 500 100
            L 500 350
            L 100 350
            L 100 600
          "
          strokeOpacity="0.4"
        />
      </svg>

      <div className="card card-left" style={{ top: '80px' }}>
        <span className="check">✔</span>
        <div className="textoDocard">
          <h3>Aula 1</h3>
          <p>Instalação dos programas e dicas básicas</p>
        </div>
      </div>

      <div className="card card-right" style={{ top: '330px' }}>
        <span className="check">✔</span>
        <div className="textoDocard">
          <h3>Aula 2</h3>
          <p>Conceitos básicos de HTML e CSS</p>
        </div>
      </div>

      <div className="card card-left" style={{ top: '580px' }}>
        <span className="check">✔</span>
        <div className="textoDocard">
          <h3>Aula 3</h3>
          <p>JavaScript e finalização do site</p>
        </div>
      </div>
    </section>
    </>
  )
}
