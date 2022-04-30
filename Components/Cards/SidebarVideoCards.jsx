import styles from "../../styles/Card.module.css";
import Image from "next/image";

const SidebarVideoCard = (props) => {
    return(
        <div className={styles.sidebarCardContainer}>
            <div className={styles.sidebarCardImg}>
                <Image
                src={props.thumbnail}
                alt="Thumbnail Image"
                width={260}
                height={160}
            />
            </div>
            <div className={styles.cardContent}>
                <div className={styles.videoInfo}>
                    <p className={styles.vidoTitle}>{props.title}</p>
                    <p className={styles.channelsName}>{props.channelName}</p>
                    <p className={styles.viewInfo}>{props.totalViews}K views . <span>{props.uploadedTime}</span></p>
                </div>
                {/* <button className={styles.optBtn}><span className="material-icons">	&#xe5d4; </span></button> */}
            </div>
        </div>
    )
}

export default SidebarVideoCard;