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

  test('increments the counter when +1 button is clicked', async () => {
    // Arrange
    const props = {
      counterValue: 1
    }

    // Act
    const wrapper = mount(MyCounter, {
      props
    })

    const counter = wrapper.find('[data-testid="counter"]')
    const square = wrapper.find('[data-testid="square"]')

    const btnIncrease = wrapper.find('[data-testid="btn-increase"]')
    await btnIncrease.trigger('click')

    // Assert
    expect(counter.text()).toContain(`Counter: ${props.counterValue + 1}`)
    expect(square.text()).toContain(
      `Square: ${(props.counterValue + 1) * (props.counterValue + 1)}`
    )
  })

  test('decrements the counter when -1 button is clicked twice', async () => {
    // Arrange
    const props = {
      counterValue: 1
    }

    // Act
    const wrapper = mount(MyCounter, {
      props
    })

    const counter = wrapper.find('[data-testid="counter"]')
    const square = wrapper.find('[data-testid="square"]')

    const btnDecrease = wrapper.find('[data-testid="btn-decrease"]')
    await btnDecrease.trigger('click')
    await btnDecrease.trigger('click')

    // Assert
    expect(counter.text()).toContain(`Counter: ${props.counterValue - 2}`)
    expect(square.text()).toContain(
      `Square: ${(props.counterValue - 2) * (props.counterValue - 2)}`
    )
  })
})
