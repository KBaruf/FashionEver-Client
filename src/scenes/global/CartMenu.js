import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, Divider, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import styled from '@emotion/styled';
import { shades } from '../../theme';
import { decreaseCount, increaseCount, removeFromCart, setisCartOpen } from '../../state';
import { useNavigate } from 'react-router-dom';

<<<<<<< HEAD:src/scenes/global/cartMenu.js
const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CartMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);

  const totalPrice = cart.reduce((total, item) => {
    return total + item.count * item.attributes.price;
  }, 0);
  return (
    <Box display={isCartOpen ? 'block' : 'none'} backgroundColor='rgba(0,0,0,0.4)' zIndex='10' position='fixed' width='100%' height='100%' left='0' top='0' overflow='auto'>
      <Box position='fixed' right='0' bottom='0' width='max(400px, 30%)' height='100%' backgroundColor='white'>
        <Box padding='30px' overflow='auto' height='100%'>
          <FlexBox mb='15px'>
            <Typography>SHOPPING BAG {cart.length}</Typography>
            <IconButton
              onClick={() => {
                dispatch(setisCartOpen({}));
              }}
            >
              <CloseIcon />
            </IconButton>
          </FlexBox>
          <Box>
            {/******** LOOP CART ARRAY **********/}
            {cart.map((item) => {
              return (
                <Box key={`${item.attributes.name}-${item.id}`}>
                  <FlexBox p='15px 0'>
                    <Box flex='1 1 40%'>
                      <img alt={item?.name} height='164px' src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.format?.medium?.url}`} />
                    </Box>

                    {/* {REMOVE ITEM} */}
                    <Box flex='1 1 40%'>
                      <FlexBox mb='5px'>
                        <Typography fontWeight='bold'>{item.attribute.name}</Typography>
                        <IconButton
                          onClick={() => {
                            dispatch(removeFromCart({ id: item.id }));
                          }}
                        >
                          <CloseIcon />
                        </IconButton>
                      </FlexBox>
                      <Typography>{item?.attributes.shortDescription}</Typography>

                      {/* DECREASE & INCREASE AMOUNT */}
                      <FlexBox m='15px 0'>
                        <Box display='flex' alignItems='center' border={`1.5px solid ${shades.neutral[500]}`}>
                          <IconButton onClick={dispatch(decreaseCount({ id: item.id }))}>
                            <RemoveIcon />
                          </IconButton>
                          <Typography>{item.count}</Typography>
                          <IconButton onClick={dispatch(increaseCount({ id: item.id }))}>
                            <AddIcon />
                          </IconButton>
                        </Box>

                        {/* PRICE */}
                        <Typography fontWeight='bold'>${item.attributes.price}</Typography>
                      </FlexBox>
                    </Box>
                  </FlexBox>
                  <Divider />
                </Box>
              );
            })}
          </Box>
          <Box m='20px 0'>
            <FlexBox m='20px 0'>
              <Typography fontWeight='bold'>SUBTOTAL</Typography>
              <Typography fontWeight='bold'>${totalPrice}</Typography>
            </FlexBox>
            <Button
              sx={{ backgroundColor: shades.primary[400], color: 'white', borderRadius: 0, minWidth: '100%', padding: '20px 40px', m: '20px 0' }}
              onClick={() => {
                navigate('/checkout');
                dispatch(setisCartOpen({}));
              }}
            >
              CHECKOUT
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
=======
const CartMenu = () => {
  return <div>Cart Menu</div>;
>>>>>>> e907e504bdfc8c9829660764c7218610f4b09d72:src/scenes/global/CartMenu.js
};

export default CartMenu;
