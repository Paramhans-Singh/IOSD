import classes from '../styles/MissionListItem.module.css';







const MissionListItem = ({title, content, index})=> {



    return <div className={classes.item} style={{left: index*100}}>
        <h2 className={classes.title}>{title}</h2>
        <p className={classes.content}>{content}</p>
    </div>
}


export default MissionListItem;