import { useEffect, useState } from 'react'
import { Storage } from './storage'

export const useLocalStorage = (key, def = null) => {
  const [state, setState] = useState(Storage.getJSON(key, def))
  
  useEffect(() => {
    Storage.setJSON(key, state)
  }, [state])

  return [state, setState]
}