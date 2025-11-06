import { test, describe, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MyCounter from '@/components/MyCounter.vue'

describe('MyCounter', () => {
  test('should match snapshot', () => {
    // Arrange
    const props = {
      counterValue: 0
    }

    // Act
    const wrapper = mount(MyCounter, {
      props
    })

    // Assert
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('renders the counter value correctly', () => {
    // Arrange
    const props = {
      counterValue: 5
    }

    // Act
    const wrapper = mount(MyCounter, {
      props
    })

    // Assert
    expect(wrapper.find('h3').text()).toContain(`Counter: ${props.counterValue}`)
  })

  test('render the square value correctly', () => {
    // Arrange
    const props = {
      counterValue: 2
    }

    // Act
    const wrapper = mount(MyCounter, {
      props
    })

    // Assert
    expect(wrapper.find('[data-testid="square"]').text()).toContain(
      `Square: ${props.counterValue * props.counterValue}`
    )
  })
})
