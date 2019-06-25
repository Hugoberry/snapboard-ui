import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'
import ComponentA from '../ComponentA'

storiesOf('Components', module)
  .add('Component A', () => <ComponentA />)
