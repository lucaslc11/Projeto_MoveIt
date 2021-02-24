import styles from '../styles/components/CompletedChallengesContainer.module.css';

export function CompleteChallenges() {
    return (
        <div className={styles.completedChallengesContainer}>
            <span>Desafios completos</span>
            <span>5</span>
        </div>
    )
}