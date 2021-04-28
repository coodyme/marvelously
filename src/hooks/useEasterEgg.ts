// Hook simplesinho pra fazer uma brincadeira com konami code hehe
import React from 'react'

const useEasterEgg = () => {
  return ``
}

export default useEasterEgg
/* import React, { useState, useEffect, useCallback, useMemo } from 'react'
import {
  Intent,
  Position,
  ProgressBar,
  Toast,
  Toaster,
  Classes
} from '@blueprintjs/core'
import { IconNames } from '@blueprintjs/icons'
import array from '../utils/array'

const keyCodes = {
  up: 'ArrowUp',
  down: 'ArrowDown',
  left: 'ArrowLeft',
  right: 'ArrowRight',
  b: 'KeyB',
  a: 'KeyA',
  f4: 'F4',
  enter: 'Enter'
}

const toaster = Toaster.create({
  position: Position.TOP,
  canEscapeKeyClear: true,
  usePortal: true,
  maxToasts: 1,
  autoFocus: true
})

const ACTIVE_TIME = 5000
const ACTIVE_MESSAGE = 'Hm... Type the code to unlock.'
const VERIFIED_MESSAGE = 'UNLOCKED! Code verified.'
const EXPIRED_MESSAGE = 'Time to type expired...'
const INVALID_MESSAGE = 'Wrong code, try again!'
const UNLOCKED_MESSAGE = 'Code already use, try to refresh the page.'
const SEQUENCE_LENGTH = 10

const useEasterEgg = (secret, callback) => {
  const [sequence, setSequence] = useState([])
  const [active, setActive] = useState(false)
  const [currentCode, setCurrentCode] = useState(null)
  const [currentTimeout, setCurrentTimeout] = useState(0)
  const [sequenceFilled, setSequenceFilled] = useState(false)
  const [alreadyUnlocked, setAlreadyUnlocked] = useState(false)

  // Debug Only
  useEffect(() => {
    console.log(sequence)
  }, [sequence])

  useEffect(() => {
    const secretSequence = secret.map(key => {
      if (key === 'up') {
        return keyCodes.up
      } else if (key === 'down') {
        return keyCodes.down
      } else if (key === 'left') {
        return keyCodes.left
      } else if (key === 'right') {
        return keyCodes.right
      } else if (key === 'a') {
        return keyCodes.a
      } else if (key === 'b') {
        return keyCodes.b
      }
    })

    const verified = array.compareValues(sequence, secretSequence)

    if (verified) {
      callback()
      setAlreadyUnlocked(true)
      toaster.show({
        icon: IconNames.TICK,
        message: VERIFIED_MESSAGE,
        intent: Intent.PRIMARY
      })
    }

    if (!verified && sequenceFilled) {
      toaster.show({
        icon: IconNames.ERROR,
        message: INVALID_MESSAGE,
        intent: Intent.DANGER
      })
    }

    setSequence([])
    setActive(false)
    setCurrentCode(null)
    setCurrentTimeout(0)
  }, [sequenceFilled])

  useEffect(() => {
    if (active) {
      toaster.show({
        icon: IconNames.KEY,
        message: ACTIVE_MESSAGE,
        intent: Intent.WARNING
      })
      setCurrentTimeout(
        setTimeout(() => {
          setActive(false)
          setSequence([])
          setCurrentCode(null)
          toaster.show({
            icon: IconNames.ERROR,
            message: EXPIRED_MESSAGE,
            intent: Intent.DANGER
          })
        }, ACTIVE_TIME)
      )
    }
  }, [active])

  useEffect(() => {
    if (currentCode && active) {
      if (sequence.length < SEQUENCE_LENGTH) {
        setSequence([...sequence, currentCode])
        setCurrentCode(null)
      } else {
        if (currentCode === keyCodes.enter) {
          setSequenceFilled(!sequenceFilled)
          clearTimeout(currentTimeout)
          setCurrentTimeout(null)
        }
      }
    }
  }, [active, currentCode])

  const handleKeyDown = useCallback(
    event => {
      const { code } = event

      if (code === keyCodes.f4) {
        if (alreadyUnlocked) {
          toaster.show({
            icon: IconNames.ERROR,
            message: UNLOCKED_MESSAGE,
            intent: Intent.DANGER
          })
        } else {
          setSequence([])
          setCurrentCode(null)
          setActive(true)
        }
      } else {
        setCurrentCode(code)
      }
    },
    [active, alreadyUnlocked]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])
}

export default useEasterEgg
*/
