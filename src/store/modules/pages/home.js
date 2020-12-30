export const module = {
  namespaced: true,
  state: {
    it: {
      title: 'GREEN RECOVERY NOW',
      subtitle: '',
      description: '',
      sections: {
        about: {
          title: 'The movement',
          description: '<b>The global pandemic has created a once in a lifetime opportunity to combat climate change. As governments around the world spend trillions of $ to support economies and keep people in jobs, that money can either perpetuate fossil fuel use, or be used to kick-start a green recovery to combat climate change and protect our long-term futures. Let’s tell our governments how we want them to spend our money!</b>',
          people: [
          ]
        },
        infos: {
          title: 'About us',
          description: 'Green Recovery Now is an Oxford University student-led movement. We feel passionately that the climate crisis must be tackled urgently and, being university students, we want to make use of research and our connections with researchers to support the argument for a global green and fair recovery from Covid-19. We started at Oxford University, but with the intention of reaching out to students around the world. We want to work together as a global movement to put pressure on our governments to invest in climate-friendly policies to boost economic recovery from the Covid pandemic – based on the best scientific research.' +
            '<br><br>' +
            'Our manifesto is supported by respected academics, policy makers and climate activists. Through these advocates we hope to convince the public, business leaders and politicians that this opportunity to make a green recovery from Covid-19 must not be missed.'
        },
        news: {
          title: 'Resources'
        },
        contacts: {
          title: 'Scrivici',
          subtitle: 'Compila il seguente form per contattarci',
          rows: [
            {
              description: '',
              labels: ['Nome', 'Cognome', 'Email']
            },
            {
              description: 'Cosa devi comunicarci?',
              labels: ['Invia']
            }
          ]
        }
      },
      quotes: [
        '"progettare con particolare attenzione ai sistemi costruttivi volti al risparmio energetico, con l’utilizzo di energie rinnovabili, anche in costruzioni vincolate e/o paesaggisticamente rilevanti."'
      ]
    },
    en: {

    }
  },
  getters: {
    text(state, getters, rootState) {
      return state[rootState.lang]
    }
  }
}
