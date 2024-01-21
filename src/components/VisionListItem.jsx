import classes from '../styles/VisionListItem.module.css';
import VisionGraphics from '../assets/About/VisionGraphics.svg?react';






const VisionListItem = ({title, content, index, color})=> {



    return <div className={classes.item} style={{left: index*100}}>
        <VisionGraphics className={classes.graphics} />
        <p className={classes.content}>{content}</p>
            {/* <h2 className={classes.title}>{title}</h2> */}
    </div>
}


export default VisionListItem;