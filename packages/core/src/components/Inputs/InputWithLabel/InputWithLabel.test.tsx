import { render, screen } from '@testing-library/react'
import InputWithLabel from './InputWithLabel'

describe('InputWithLabel Component', () => {
  const LABEL_TEXT = 'Username'
  const PLACEHOLDER_TEXT = 'Enter your username'
  //   const ERROR_MESSAGE = 'This field is required';

  //   it('should render without accessibility violations', async () => {
  //     const { container } = render(<InputWithLabel label={LABEL_TEXT} />);
  //     const results = await axe(container);
  //     expect(results).toHaveNoViolations();
  //   });

  it('should render the label correctly', () => {
    render(<InputWithLabel label={LABEL_TEXT} />)
    const label = screen.getByText(LABEL_TEXT)
    expect(label).toBeInTheDocument()
  })

  it('should pass placeholder prop to the input element', () => {
    render(<InputWithLabel label={LABEL_TEXT} placeholder={PLACEHOLDER_TEXT} />)
    const input = screen.getByPlaceholderText(PLACEHOLDER_TEXT)
    expect(input).toBeInTheDocument()
  })

  //   it('should handle value and onChange props correctly', () => {
  //     const handleChange = jest.fn();
  //     const value = 'testuser';
  //     render(
  //       <InputWithLabel
  //         label={LABEL_TEXT}
  //         value={value}
  //         onChange={handleChange}
  //         placeholder={PLACEHOLDER_TEXT}
  //       />
  //     );
  //     const input = screen.getByPlaceholderText(PLACEHOLDER_TEXT);
  //     expect(input).toHaveValue(value);
  //     userEvent.type(input, 'a');
  //     expect(handleChange).toHaveBeenCalledTimes(1);
  //   });

  //   it('should apply the error prop to the input element', () => {
  //     render(<InputWithLabel label={LABEL_TEXT} error={ERROR_MESSAGE} />);
  //     const input = screen.getByLabelText(ERROR_MESSAGE);
  //     expect(input).toHaveAttribute('aria-invalid', 'true');
  //   });

  //   it('should apply the disabled prop to the input element', () => {
  //     render(<InputWithLabel label={LABEL_TEXT} disabled />);
  //     const input = screen.getByLabelText(LABEL_TEXT);
  //     expect(input).toBeDisabled();
  //   });

  it('should apply the required prop to the label element', () => {
    render(<InputWithLabel label={LABEL_TEXT} required />)
    const span = screen.getByText(`*`)
    expect(span).toBeInTheDocument()
  })
})
