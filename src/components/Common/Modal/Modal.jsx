import {  Rate, Divider, Modal, Button } from 'antd';
import {
  PlusOutlined
} from '@ant-design/icons';
import './styles.css';


function ModalProduct(props) {
  const {item, isShown, setIsShown} = props;
  const { id, title, image, price, description, rating } = item;

  const closeModal = () => setIsShown(false);
    
  return (
    <div className="Modal">
        <Modal
        centered
        open={isShown}
        onOk={closeModal}
        onCancel={closeModal}
        width={700}
      >
        <div className='modal-content'>
          <div className='image-container'>
            <div >
              <img
                alt="example"
                src={image} 
                className='item-img'
              />
            </div>
          </div>

          <div className='item-content'>
            <p className='item-title'>{title}</p>
            <p className='item-sku'>{`SKU: ${id}`}</p>
            <div className='item-rate'>
              <Rate disabled value={rating.rate} />
              <p>{rating.rate}</p>
            </div>
            <p className='item-price'>{`$ ${price}`}</p>

            <Divider dashed orientation="right" orientationMargin={50}>
              Description
            </Divider>

            <p className='item-description'>{description}</p>
            <Button className='item-add-to-cart' type="primary" block icon={<PlusOutlined />}>
               ADD TO CART
            </Button>
          </div>
        </div>
      </Modal>

    </div>
  );
}

export default ModalProduct;

