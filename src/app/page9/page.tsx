import styles from './styles.module.css';

export default function Page9() {
    return (
        <div className={styles.container}>
            <img 
                src="/post.jpg" 
                alt="post" 
                style={{ width: '65vw', height: 'auto' }}
            />
            <img 
                src="/summer.jpg" 
                alt="post2" 
                style={{ width: '65vw', height: 'auto' }} 
            />
        </div>
    );
}
