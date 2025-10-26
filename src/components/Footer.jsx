import React from 'react';
import styles from './Footer.module.css'; // Keep the CSS module import

// Assuming you're using React Router or a similar setup for client-side routing
// If using React Router v6, replace useRouter with useNavigate and Link imports

// TO USE More Classes => {cn(className1, className2, className3)}
const cn = (...classes) => {
    return classes.filter(Boolean).join(' ');
};

// Mock useRouter for non-Next.js environment (replace with actual router hook if using one)
const useRouter = () => {
    // In a real React project, this would be:
    // const navigate = useNavigate();
    // return { push: navigate };
    
    // Simple placeholder for demonstration:
    return {
        push: (path) => {
            console.log(`Navigating to: ${path}`);
            // In a real app, you would use window.location.href = path or a router function
        }
    };
};

// assets path => '/footer_old/{name}'

const Footer = () => {
    const router = useRouter();
    
    // NOTE: All Next.js <Image> tags are replaced with standard <img> tags.
    // The width/height/style properties are kept as inline styles for compatibility.
    
    return (
        <section>
            <div className={styles.footer}>
                <div className={styles.footer_upper}>
                    {/* ANWESHA Logo */}
                    <div className={styles.foter_logo}>
                        <img
                            src="/footer_old/logo.svg"
                            alt="Anwesha Logo"
                            style={{ width: '394.55px', height: '225.76px' }}
                        />
                    </div>

                    {/* Social Media Links */}
                    <div className={styles.social_logo}>
                        <div className={styles.social_logo_container}>
                            <a
                                href="mailto:anwesha@iitp.ac.in"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="/footer_old/email.svg"
                                    alt="Email icon"
                                    style={{ width: '62.173px', height: '49.173px' }}
                                />
                            </a>
                            <a
                                href="https://www.instagram.com/anwesha_iitpatna/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="/footer_old/insta.svg"
                                    alt="Instagram icon"
                                    style={{ width: '62.173px', height: '49.173px' }}
                                />
                            </a>
                        </div>
                        <div className={styles.social_logo_container}>
                            <a
                                href="https://www.facebook.com/anwesha.iitpatna/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="/footer_old/facebook.svg"
                                    alt="Facebook icon"
                                    style={{ width: '63.173px', height: '49.173px' }}
                                />
                            </a>
                        </div>
                        <div className={styles.social_logo_container}>
                            <a
                                href="https://twitter.com/anweshaiitpat/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="/footer_old/twittter.svg"
                                    alt="Twitter icon"
                                    width={63.173}
                                    height={49.173}
                                />
                            </a>
                            <a
                                href="https://www.youtube.com/@AnweshaIITP"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="/footer_old/youtube.svg"
                                    alt="YouTube icon"
                                    style={{ width: '63.173px', height: '49.173px' }}
                                />
                            </a>
                        </div>
                    </div>

                    {/* Address and Contact Info */}
                    <div className={styles.footer_address}>
                        <h4 >
                            Anwesha Office, <br />
                            Indian Institute of Technology Patna, <br />
                            Bihta, Patna - 801103 <br />
                            anwesha@iitp.ac.in ( office work only ) <br />
                            <span
                                onClick={() => router.push('/contact')}
                                style={{ textDecoration: 'underline', cursor: 'pointer' }}
                            >
                                Contact us
                            </span>
                            → for technical issues
                        </h4>
                    </div>
                </div>

                {/* Horizontal Line Divider */}
                <div className={styles.line_section}>
                    <img
                        src="/footer_old/Line.svg"
                        alt="Divider Line"
                        style={{
                            width: '100%',
                            height: '10px',
                            objectFit: 'contain',
                        }}
                    />
                </div>

                {/* Lower Navigation (Privacy & Terms) */}
                <div className={styles.footer_lower}>
                    <h4 onClick={() => { router.push('/privacy') }}> Privacy Policy </h4>
                    <h4 onClick={() => { router.push('/terms') }}> Terms and Condition</h4>
                </div>

                {/* Decorative Images */}
                <div className={styles.left_helobean}>
                    <img
                        src="/footer_old/chootSmall.svg"
                        alt="Decorative element left"
                        style={{ width: '200px', height: '100px' }}
                    />
                </div>
                <div className={styles.right_helobean}>
                    <img
                        src="/footer_old/chootHead.svg"
                        alt="Decorative element right"
                        style={{ width: '300px', height: '200px' }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Footer;