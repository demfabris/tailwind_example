import React, { Fragment } from 'react'
import { render, RenderOptions, RenderResult } from '@testing-library/react'
import { FunctionComponent } from 'react'

type RenderWrapper = (
  arg0: React.ReactElement<any, any>,
  arg1?: RenderOptions
) => RenderResult

const TestWrapper: FunctionComponent = ({ children }) => {
  return <Fragment>{children}</Fragment>
}

const renderWrapper: RenderWrapper = (ui, options) =>
  render(ui, { wrapper: TestWrapper, ...options })

export * from '@testing-library/react'

export { renderWrapper as render }
