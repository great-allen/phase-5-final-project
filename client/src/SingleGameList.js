import React from 'react'
import { experimentalStyled as styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';

import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useWideCardMediaStyles } from '@mui-treasury/styles/cardMedia/wide';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import { useBouncyShadowStyles } from '@mui-treasury/styles/shadow/bouncy';

const useStyles = makeStyles(() => ({
    root: {
      width: 304,
      height:400,
      margin: 'auto',
      boxShadow: 'none',
      borderRadius: 0,
    },
    content: {
        padding: 24,
        height:50
    },
    cta: {
      marginTop:134,
      textTransform: 'initial',
      fontSize:17
      
    },
    
  }));
  
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
function SingleGameList({product}) {
    // const url=product.images&&product.images.filter((item)=>{
    //   return item.title==='banner'
    // })[0].url
    // const bannerImage = product.images && product.images.filter((item) => {
    //   return item.title === 'banner';
    // })[0];
    
    // const url = bannerImage ? bannerImage.url : ''; // if there is a banner image, get its URL, otherwise set an empty string
    
    // console.log(url);
    const styles = useStyles();
  const mediaStyles = useWideCardMediaStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();
  const shadowStyles = useBouncyShadowStyles();
  return (
    <Card className={cx(styles.root, shadowStyles.root)} style={{position:"relative"}}>
      <CardMedia
        classes={mediaStyles}
        image={
            product.images.filter((item) => {
            return item.title === 'banner';
          })[0]?product.images && product.images.filter((item) => {
            return item.title === 'banner';
          })[0].url:''
        }
        
      />
      {product.amount===0?<div style={{position:"absolute",color:"red"}}>OUT OF STOCK</div>: ''}
      <CardContent className={styles.content}>
        <TextInfoContent
          classes={textCardContentStyles}
          overline={product.release_date}
          heading={product.title}
          body={
            product.platform
          }
        />
        
      </CardContent>
      <p className={styles.cta}>
        $ {product.price}
        {' '}
        {/* {product.amount===0?<div>OUT OF STOCK</div>: ''} */}
      </p>
    </Card>
  )
}

export default SingleGameList