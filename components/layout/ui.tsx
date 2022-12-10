import Box from '@mui/material/Box'
import LogoutButton from '../ui/LogoutButton'
import useUser from '../../lib/useUser'

const UI = () => {
  const { user } = useUser()

  return <Box
    className='ui'
    sx={{
      position: 'fixed',
      overflow: 'hidden',
      padding: 0,
      margin: 0,
      width: 1,
      height: 1,
      top: 0,
      left: 0,
      zIndex: 1000
    }}>
    {(user?.loginPasswordIsExist ?? false) && <Box
      p={1}
      sx={{
        position: 'relative',
        top: 0,
        right: 0
      }}
    >
      <LogoutButton />
    </Box>}
  </Box>
}

export default UI
