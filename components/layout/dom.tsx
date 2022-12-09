import { ReactNode } from 'react'
import Box from '@mui/material/Box'

const Dom = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: 1,
        height: 1,
        zIndex: 1000,
        pointerEvents: 'none'
      }}
    >
      {children}
    </Box>
  )
}

export default Dom
