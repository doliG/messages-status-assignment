import React from 'react'
import { render } from '@testing-library/react';
import { Message } from './Message'
import { mockMessage } from '../../datas'


it('display a textarea', () => {
  const { getByText } = render(<Message message={mockMessage} />)
  expect(getByText(mockMessage.text)).toBeInTheDocument();
})

it('display message visibility', () => {
  const { getByTitle } = render(<Message message={mockMessage} />)
  expect(getByTitle(mockMessage.visibility)).toBeInTheDocument();
})

it('display author of the message', () => {
  const { getByText } = render(<Message message={mockMessage} />)
  expect(getByText(mockMessage.meta.createdBy.name)).toBeInTheDocument();
})