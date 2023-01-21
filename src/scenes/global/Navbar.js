import logo from '../../assets/logo/fashionEver_logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Badge, IconButton } from '@mui/material';
import { personOutlined, shoppingBagOutlined, menuOutlined, searchOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { shades } from '../../theme';
import { setisCartOpen } from '../../state';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  return (
    <Box display='flex' alignItems='center' width='100%' height='60px' background='rgba(255,255,255,0.95' color='black' position='fixed' top='0' left='0' zIndex='1'>
      <Box width='90%' margin='auto' display='flex' justifyContent='space-between' alignItems='center'>
        <Box width='274px' onClick={() => navigate('/')} sx={{ '&:hover': { cursor: 'pointer', borderRadius: '50%' } }}>
          <img src={logo} alt='fashionEver Logo' />
        </Box>
        <Box display='flex' justifyContent='space-between' columnGap='20px' zIndex='2'>
          <IconButton sx={{ color: 'black' }}>
            <searchOutlined />
          </IconButton>
          <IconButton sx={{ color: 'black' }}>
            <personOutlined />
          </IconButton>
          <Badge
            badgeContent={cart.length}
            color='secondary'
            invisible={cart.length === 0}
            sx={{
              '& .MuiBadge-badge': {
                right: 5,
                top: 5,
                padding: '0 4px',
                height: '14px',
              },
            }}
          >
            <IconButton onClick={() => dispatch(setisCartOpen({}))} sx={{ color: 'black' }}>
              <shoppingBagOutlined />
            </IconButton>
          </Badge>
          <IconButton sx={{ color: 'black' }}>
            <menuOutlined />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
