import React, { useState } from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function GameImages({ products, fetchProducts,setSearchImages,searchImages }) {
  
  // const [isAdd, setIsAdd] = useState(false);
  const [titleMap, setTitleMap] = useState(new Map());
  const [urlMap, setUrlMap] = useState(new Map());
  const uniqueProductsTitles = products.filter((product, index, self) =>
  index === self.findIndex((p) => p.title === product.title)
);
  const handleImages = (productClick) => {
    fetch('/images', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_id: productClick.id,
        title: titleMap.get(productClick.id),
        url: urlMap.get(productClick.id),
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then(handleResults);
      } else {
        r.json().then((err) => alert(err.errors));
      }
    });
  };

  const handleResults = () => {
    fetchProducts();
    setTitleMap(new Map());
    setUrlMap(new Map());
  };

  return (
    <div>
      <Form className="d-flex" style={{maxWidth:300,marginLeft:"80%",marginTop:8,marginBottom:8,marginRight:5}} >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchImages}
              onChange={(e)=>setSearchImages(e.target.value)}
            />
           
          </Form>
      {uniqueProductsTitles.map((product) => {
        return (
          <Box key={product.id} style={{ width: "98%", height: 400, margin: "0 auto", overflow: "scroll", borderStyle: "ridge", marginBottom: 10 }}>
            <Box style={{ display: "flex" }}>
              <p style={{ marginLeft: "1%", marginTop: "1%" }}>{product.title}:</p>
              <form style={{ marginLeft: 5, marginTop: 5 }} onSubmit={(e) => e.preventDefault()}>
                <Row>
                  <Col sm={4}>
                    <InputGroup>
                      <Form.Control
                        id="inlineFormInputGroupUsername"
                        type="text"
                        placeholder='title'
                        value={titleMap.get(product.id) || ''}
                        onChange={(e) => setTitleMap(new Map(titleMap.set(product.id, e.target.value)))}
                      />
                    </InputGroup>
                  </Col>
                  <Col sm={8}>
                    <InputGroup>
                      <Form.Control
                        id="inlineFormInputGroupUsername"
                        type="text"
                        placeholder='url'
                        value={urlMap.get(product.id) || ''}
                        onChange={(e) => setUrlMap(new Map(urlMap.set(product.id, e.target.value)))}
                      />
                      <Button type="submit" style={{ marginLeft: 7 }} onClick={() => handleImages(product)}>Add images</Button>
                    </InputGroup>
                  </Col>
                </Row>
              </form>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
               
                {product.images.map((image) => (
                  <Grid item xs={1} sm={2} md={4} key={image.id}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span style={{ marginLeft: "1%" }}>{image.title}</span>
                      {image.title === 'banner' ?
                        <img style={{ width: 400, height: 300, marginLeft: "1%" }} src={image.url} alt='' />
                        :
                        <img style={{ width: 300, height: 500, marginLeft: "1%" }} src={image.url} alt='' />
                      }
                    </div>
                  </Grid>
                ))}


              </Grid>
            </Box>
          </Box>
        );
      })}
    </div>
  );
}

export default GameImages;
