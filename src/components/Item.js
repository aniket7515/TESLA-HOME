import React from 'react'
import Buttons from './Buttons'
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import './item.css'


const Item = ({Title , Desc , DescLink , backgroundImg , leftBtnTxt ,rightBtnTxt,leftBtnLink,rightBtnLink, twoButtons,first}) => {
    return (
        <div className='item' style={{
            backgroundImage:`url(${backgroundImg})`
            // 'url(${backgroundImg})'
        }}>
            <div className="item_container">
                <div className="item_text">
                    <p>{Title}</p>
                    <div className="item_textDesc">
                        <p>{Desc}</p>
                    </div>
                </div>
                <div className="item_lowerThird">
                    <div className="item_buttons">
                        <Buttons img='primary' text={leftBtnTxt} link={leftBtnLink}/>
                        {twoButtons &&(
                            <Buttons img='secondary' text={rightBtnTxt} link={rightBtnLink}/>
                        )}

                    </div>
                    {first && (
                        <div className="item__expand">
                            <i class="bi bi-arrow-down-short"></i>

                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}

export default Item
