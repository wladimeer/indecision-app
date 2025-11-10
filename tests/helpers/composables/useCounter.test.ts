import { useCounter } from '@/composables/useCounter'
import { test, describe, expect } from 'vitest'

describe('useCounter', () => {
  test('it should have a default initial values', () => {
    // Arrange

    // Act
    const { counter, square } = useCounter()

    // Assert
    expect(counter.value).toBeDefined()
    expect(square.value).toBe(counter.value * counter.value)
  })

  test('initializes counter with provided initial value', () => {
    // Arrange
    const initialValue = 10

    // Act
    const { counter } = useCounter(initialValue)

    // Assert
    expect(counter.value).toBe(initialValue)
  })

  test('initializes square with provider initial value', () => {
    // Arrange
    const initialValue = 2

    // Act
    const { square } = useCounter(initialValue)

    // Assert
    expect(square.value).toBe(initialValue * initialValue)
  })

  test('should increase values when increase function is called', () => {
    // Arrange
    const initialValue = 3

    // Act
    const { counter, square, increaseCounter } = useCounter(initialValue)
    increaseCounter()

    // Assert
    expect(counter.value).toBe(initialValue + 1)
    expect(square.value).toBe((initialValue + 1) * (initialValue + 1))
  })

  test('should decrease values when decrease function is called', () => {
    // Arrange
    const initialValue = 5

    // Act
    const { counter, square, decreaseCounter } = useCounter(initialValue)
    decreaseCounter()

    // Assert
    expect(counter.value).toBe(initialValue - 1)
    expect(square.value).toBe((initialValue - 1) * (initialValue - 1))
  })
})
