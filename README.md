# cubo-components

Este é um conjunto de components React reutilizáveis para facilitar o desenvolvimento de interfaces de usuário. Você pode ver a documentação e exemplos de uso dos components em [cubo-components Storybook](https://cubo-components.vercel.app/).

## Instalação

Para instalar a biblioteca em seu projeto, você pode usar npm:

```bash
npm install cubo-components@latest
```

## Uso

Para utilizar os components em seu projeto, você pode importá-los da seguinte maneira:

```jsx
import { Badge, Button } from 'cubo-components'
```

Certifique-se de ter o Tailwind CSS instalado e configurado em seu projeto, pois os components dependem dele para estilos.

## Desenvolvimento

Para desenvolver novos components ou modificar os existentes, você pode clonar este repositório e iniciar o Storybook localmente:

```bash
git clone https://github.com/cubo-tecnologia/cubo-components.git
cd cubo-components
npm install
npm run storybook
```

Isso iniciará o servidor local do Storybook em http://localhost:6006/, onde você poderá visualizar e testar os components enquanto desenvolve.

## Testes

A biblioteca utiliza o Vitest para testes unitários. Para rodar os testes, você pode executar o seguinte comando:

```bash
npm run test
```

Certifique-se de estar no diretório `packages/core` antes de executar este comando.
