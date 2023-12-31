class CardNews extends HTMLElement {
  constructor() {
    super()

    const shadow = this.attachShadow({ mode: 'open' })
    shadow.appendChild(this.build())
    shadow.appendChild(this.styles())
  }

  build() {
    const componentRoot = document.createElement('div')
    componentRoot.setAttribute('class', 'card')

    const cardLeft = document.createElement('div')
    cardLeft.setAttribute('class', 'card__left')

    const author = document.createElement('span')
    author.textContent = 'By ' + (this.getAttribute('author') || 'Anonymous')

    const linkTitle = document.createElement('a')
    linkTitle.textContent = this.getAttribute('title')
    linkTitle.href = this.getAttribute('link-url')

    const newsContent = document.createElement('p')
    newsContent.textContent = this.getAttribute('content')

    cardLeft.appendChild(author)
    cardLeft.appendChild(linkTitle)
    cardLeft.appendChild(newsContent)

    const cardRight = document.createElement('div')
    cardRight.setAttribute('class', 'card__right')

    const newsImage = document.createElement('img')
    newsImage.src =
      this.getAttribute('photo') || './assets/images/default-photo.png'
    newsImage.alt = 'Imagem de Darth Vader'

    cardRight.appendChild(newsImage)

    componentRoot.appendChild(cardLeft)
    componentRoot.appendChild(cardRight)

    return componentRoot
  }

  styles() {
    const style = document.createElement('style')

    style.textContent = `
    .card {
      width: 90%;
      display: flex;
      -webkit-box-shadow: 9px 10px 36px -6px rgba(0, 0, 0, 0.47);
      -moz-box-shadow: 9px 10px 36px -6px rgba(0, 0, 0, 0.47);
      box-shadow: 9px 10px 36px -6px rgba(0, 0, 0, 0.47);
    }

    .card__left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 10px;
    }

    .card__left span {
      font-weight: 400;
    }

    .card__left a {
      margin: 15px 0;
      font-size: 25px;
      color: black;
      text-decoration: none;
      font-weight: bold;
    }

    .card__left p {
      color: rgb(77, 77, 77);
    }

    .card__right img {
      width: 300px;
      height: 200px;
    }
    `

    return style
  }
}

customElements.define('card-news', CardNews)
