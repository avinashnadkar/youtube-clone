import styles from "../../styles/Card.module.css";
import Image from "next/image";

const VideoCard = (props) => {
    return(
        <div className={styles.container}>
            <div className={styles.cardImg}>
                <Image
                   src={props.thumbnail}
                   alt="Thumbnail Image"
                   width={260}
                   height={160}
               />
            </div>
            <div className={styles.cardContent}>
                <div className={styles.profilePic}>
                    <Image 
                        src={props.profilePic}
                        alt="Channel's profile pic"
                        width={50}
                        height={50}
                    />
                </div>
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

export default VideoCard;