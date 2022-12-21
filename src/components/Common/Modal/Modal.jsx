import { Modal } from 'antd';
import {  Rate } from 'antd';
import './styles.css';


function ModalProduct(props) {
  const {item, isShown, setIsShown} = props;
  const { id, title, image, price, description, rating } = item;

  const closeModal = () => setIsShown(false);
    
  return (
    <div className="Modal">
        <Modal
        title={`${title} ${id} `}
        centered
        open={isShown}
        onOk={closeModal}
        onCancel={closeModal}
        width={600}
      >
        <div className='modal-content'>
          <img
            alt="example"
            src={image} 
            className='item-img'
          />
          <p className='item-price'>{`$ ${price}`}</p>
          <p>{description}</p>
          <Rate disabled value={rating.rate} />
          <p>{rating.rate}</p>
        </div>

      </Modal>

    </div>
  );
}

export default ModalProduct;

