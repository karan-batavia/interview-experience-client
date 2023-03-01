import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import Comment from '../../components/Comment/Comment';
import DisplayQuill from '../../components/DisplayQuill/DisplayQuill';
import { getPost } from '../../services/post.services';
import styles from './PostPage.module.css';

function PostPage() {
  const { id } = useParams();
  const postQuery = useQuery({
    queryKey: ['post', id],
    queryFn: () => getPost(id),
  });

  // TODO: implement loading
  if (postQuery.status === 'loading') return <h3>Loading</h3>;
  if (postQuery.status === 'error') return <h3>error</h3>;
  return (
    <div className={styles.PostPage}>
      <div className={`container ${styles.container}`}>
        <div className={styles.post}>
          <div className={styles.title}>
            <h2>{postQuery.data.title}</h2>
          </div>
          <div className={styles.postContent}>
            <div className={styles.userDetails}>
              <div className={styles.userName}>{postQuery.data.postAuthor}</div>
              <div className={styles.like}>{postQuery.data.voteCount}</div>
              <div className={styles.date}> </div>
            </div>

            <DisplayQuill content={postQuery.data.content} />

            <div className={styles.postDetails}>
              <div className={styles.comments}>Comments (10)</div>

              <div className={styles.filterInput}>
                <label htmlFor="domain">
                  <select name="domain" className={styles.inputField}>
                    <option value="1">Sort By</option>
                    <option value="2">Newest</option>
                    <option value="3">Oldest</option>
                    <option value="4">Top Voted</option>
                  </select>
                </label>
              </div>
            </div>

            <div className={styles.commentList}>
              <ul>
                <li>
                  <Comment />
                </li>
                <li>
                  <Comment />
                </li>
                <li>
                  <Comment />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.dataCard}>
            <ul>
              <li>
                <div className={styles.dataListItem}>
                  Comments
                  <span> 24 </span>
                </div>
              </li>
              <li>
                <div className={styles.dataListItem}>
                  Favourited
                  <span>21</span>
                </div>
              </li>
              <li>
                <div className={styles.dataListItem}>
                  Views
                  <span>24k</span>
                </div>
              </li>
            </ul>
          </div>

          <div className={styles.related}>
            <p>Related</p>
            <ul>
              <li>a</li>
              <li>b</li>
              <li>c</li>
              <li>d</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostPage;