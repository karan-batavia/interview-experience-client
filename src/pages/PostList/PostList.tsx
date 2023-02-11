import React from 'react';
// import { GoSearch } from 'react-icons/go';
import styles from './PostList.module.css';

function PostList() {
  return (
    <div className={styles.PostList}>
      <section className={styles.navbar} />
      <section className={styles.head}>
        <h1 className={styles.heading}>Top Experiences</h1>
        <div className={styles.topPosts}>
          <div className={styles.topPost1}>
            <h3> Tag1 Tag2</h3>
            <h2> Heading</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
            </p>
            <div className={styles.postFooter}>
              <div>
                <span> Post Author</span>
                <br />
                <span> Date </span>
              </div>
              <div className={styles.postLikes}>
                <div> Like Icon</div>
                <span> 200</span>
              </div>
            </div>
          </div>
          <div className={styles.topPost2}>
            <h3> Tag1 Tag2</h3>
            <h2> Heading</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
            </p>
            <div className={styles.postFooter}>
              <div>
                <span> Post Author</span>
                <br />
                <span> Date </span>
              </div>
              <div className={styles.postLikes}>
                <div> Like Icon</div>
                <span> 200</span>
              </div>
            </div>
          </div>
          <div className={styles.topPost3}>
            <h3> Tag1 Tag2</h3>
            <h2> Heading</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
            </p>
            <div className={styles.postFooter}>
              <div>
                <span> Post Author</span>
                <br />
                <span> Date </span>
              </div>
              <div className={styles.postLikes}>
                <div> Like Icon</div>
                <span> 200</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.writeContainer}>
          <button className={styles.writeExperienceButton} type="button">
            {' '}
            Write Experience
          </button>
        </div>
      </section>
      <section className={styles.posts} id="recentPosts">
        <div className="container">
          <h2>
            <span>Recent Experiences </span>
          </h2>

          <div className={styles.filter}>
            <div className={styles.filterElement}>
              <div className={styles.filterElementBlock}>
                <div className={styles.filerElementinputField}>
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
            </div>

            <div className={styles.filterElement}>
              <div className={styles.filterElementBlock}>
                <div className={styles.filerElementinputField}>
                  <label htmlFor="domain">
                    <select name="domain" className={styles.inputField}>
                      <option value="1">Job Role</option>
                      <option value="2">Software Developer</option>
                      <option value="3">FullStack-Developer</option>
                    </select>
                  </label>
                </div>
              </div>
            </div>

            <div className={styles.filterElement}>
              <div className={styles.filterElementBlock}>
                <div className={styles.filerElementinputField}>
                  <label htmlFor="domain">
                    <select name="domain" className={styles.inputField}>
                      <option value="1">Company</option>
                      <option value="2">Amazon</option>
                      <option value="3">Google</option>
                      <option value="4">Meta</option>
                    </select>
                  </label>
                </div>
              </div>
            </div>

            <div className={styles.filterElement}>
              <div className={styles.filterElementBlock}>
                <div className={styles.filerElementinputField}>
                  <label htmlFor="domain">
                    <select name="domain" className={styles.inputField}>
                      <option value="1">Rating</option>
                      <option value="2">1 Star</option>
                      <option value="3">2 Star</option>
                      <option value="4">3 Star and above</option>
                    </select>
                  </label>
                </div>
              </div>
            </div>

            <div className={styles.searchBar}>
              <input
                type="text"
                className={styles.searchBarInput}
                placeholder="Search..."
              />
              {/* <GoSearch className={styles.searchBarIcon} /> */}
            </div>
          </div>

          <div className={styles.postsContainer}>
            <div className={styles.interviewPost}>
              <span className={styles.postDomain}>Experience</span>
              <span
                className={styles.postDomain}
                style={{ marginLeft: '1rem' }}
              >
                Experience
              </span>
              <div className={styles.content}>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className={styles.upArrow}
                  >
                    <path d="M413.1 327.3l-1.8-2.1-136-156.5c-4.6-5.3-11.5-8.6-19.2-8.6-7.7 0-14.6 3.4-19.2 8.6L101 324.9l-2.3 2.6C97 330 96 333 96 336.2c0 8.7 7.4 15.8 16.6 15.8h286.8c9.2 0 16.6-7.1 16.6-15.8 0-3.3-1.1-6.4-2.9-8.9z" />
                  </svg>
                  <h2 className={styles.voteCount}> 100 </h2>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className={styles.downArrow}
                  >
                    <path d="M413.1 327.3l-1.8-2.1-136-156.5c-4.6-5.3-11.5-8.6-19.2-8.6-7.7 0-14.6 3.4-19.2 8.6L101 324.9l-2.3 2.6C97 330 96 333 96 336.2c0 8.7 7.4 15.8 16.6 15.8h286.8c9.2 0 16.6-7.1 16.6-15.8 0-3.3-1.1-6.4-2.9-8.9z" />
                  </svg>
                </div>
                <div>
                  <h3 className={styles.postTitle}>My FinIQ Experience</h3>
                  <p className={styles.postDescription}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Fugiat pariatur, quibusdam iusto officiis aliquam
                    reprehenderit tenetur Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit.
                  </p>
                </div>
              </div>

              <div className={styles.recentPostFooter}>
                <div className={styles.postMoreDetail}>
                  <p className={styles.postAuthor}>Rama works</p>
                  <span>Feb 9, 2022</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1"
                  className={styles.heart}
                >
                  <path d="M2.2 9.4c0 1.3.2 3.3 2 5.1 1.6 1.6 6.9 5.2 7.1 5.4.2.1.4.2.6.2s.4-.1.6-.2c.2-.2 5.5-3.7 7.1-5.4 1.8-1.8 2-3.8 2-5.1 0-3-2.4-5.4-5.4-5.4-1.6 0-3.2.9-4.2 2.3C11 4.9 9.4 4 7.6 4 4.7 4 2.2 6.4 2.2 9.4z" />
                </svg>
              </div>
            </div>
            <div className={styles.interviewPost}>
              <span className={styles.postDomain}>Experience</span>

              <h3 className={styles.postTitle}>My FinIQ Experience</h3>
              <p className={styles.postDescription}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
                pariatur, quibusdam iusto officiis aliquam reprehenderit
                tenetur...
              </p>
              <p className={styles.postAuthor}>Rama works</p>
              <div className={styles.postMoreDetail}>
                <span>Feb 9, 2022</span>
                <span>51 Likes</span>
              </div>
            </div>
            <div className={styles.interviewPost}>
              <span className={styles.postDomain}>Experience</span>
              <h3 className={styles.postTitle}>My FinIQ Experience</h3>
              <p className={styles.postDescription}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
                pariatur, quibusdam iusto officiis aliquam reprehenderit
                tenetur...
              </p>
              <div className={styles.recentPostFooter}>
                <div className={styles.block1}>
                  <p className={styles.postAuthor}>Rama works</p>
                  <div className={styles.postMoreDetail}>
                    <span>Feb 9, 2022</span>
                  </div>
                </div>
                <div className={styles.voteOption}>
                  <div>
                    {' '}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={styles.upVote}
                    >
                      <path
                        fill="#000"
                        d="M5.306 15.694a1.043 1.043 0 0 0 1.476 0L12 10.47l5.218 5.224a1.043 1.043 0 0 0 1.476 0 1.046 1.046 0 0 0 0-1.478l-5.904-5.91a1.04 1.04 0 0 0-.79-.305 1.04 1.04 0 0 0-.79.305l-5.904 5.91a1.046 1.046 0 0 0 0 1.478Z"
                      />
                    </svg>
                    Up Vote
                  </div>

                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={styles.downVote}
                    >
                      <path
                        fill="#000"
                        d="M5.306 15.694a1.043 1.043 0 0 0 1.476 0L12 10.47l5.218 5.224a1.043 1.043 0 0 0 1.476 0 1.046 1.046 0 0 0 0-1.478l-5.904-5.91a1.04 1.04 0 0 0-.79-.305 1.04 1.04 0 0 0-.79.305l-5.904 5.91a1.046 1.046 0 0 0 0 1.478Z"
                      />
                    </svg>
                    Down Vote
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={styles.bookMark}
                    >
                      <path d="M34 6H14c-2.21 0-3.98 1.79-3.98 4L10 42l14-6 14 6V10c0-2.21-1.79-4-4-4z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PostList;
