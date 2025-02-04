import React from 'react';

const DomainSuggestionsGuide = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Domain Suggestions</h1>
      <p style={styles.subtitle}>
        Your ultimate tool for discovering creative and available domain names.
      </p>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>How to Use Domain Suggestions</h2>
        <p style={styles.text}>
          Domain Suggestions helps you find the perfect domain name for your website. Follow these simple steps to get started:
        </p>
        <ol style={styles.list}>
          <li style={styles.listItem}>
            <strong>Enter Keywords:</strong> Type in keywords related to your business, project, or idea. For example, "coffee shop" or "tech blog".
          </li>
          <li style={styles.listItem}>
            <strong>Generate Ideas:</strong> Click the "Suggest Domains" button to get a list of creative and available domain names.
          </li>
          <li style={styles.listItem}>
            <strong>Explore Options:</strong> Browse through the suggestions and pick the one that best fits your needs.
          </li>
          <li style={styles.listItem}>
            <strong>Register Your Domain:</strong> Once you find the perfect domain, follow the prompts to register it through your preferred domain registrar.
          </li>
        </ol>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Tips for Choosing the Perfect Domain</h2>
        <p style={styles.text}>
          A great domain name can make all the difference for your online presence. Here are some tips to help you choose wisely:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong>Keep It Short and Memorable:</strong> Shorter names are easier to remember and type.
          </li>
          <li style={styles.listItem}>
            <strong>Use Relevant Keywords:</strong> Include words that describe your business or website.
          </li>
          <li style={styles.listItem}>
            <strong>Avoid Numbers and Hyphens:</strong> These can be confusing and hard to remember.
          </li>
          <li style={styles.listItem}>
            <strong>Choose the Right Extension:</strong> While .com is the most popular, consider other extensions like .net, .org, or region-specific ones like .co.uk.
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Why Use Domain Suggestions?</h2>
        <p style={styles.text}>
          Domain Suggestions is designed to make your domain search effortless and effective. Here's why you should use it:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong>Creative Ideas:</strong> Get unique and creative domain suggestions tailored to your keywords.
          </li>
          <li style={styles.listItem}>
            <strong>User-Friendly:</strong> The interface is simple and intuitive, making it easy for anyone to use.
          </li>
          <li style={styles.listItem}>
            <strong>Wide Variety:</strong> Explore a wide range of domain options, including different extensions and styles.
          </li>
          <li style={styles.listItem}>
            <strong>Free to Use:</strong> Domain Suggestions is completely free, with no hidden fees.
          </li>
        </ul>
      </section>

      <footer style={styles.footer}>
        <p style={styles.footerText}>
          Ready to find your perfect domain? Start exploring now!
        </p>
      </footer>
    </div>
  );
};

// Define the styles with explicit types
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  title: {
    fontSize: '2.5rem',
    textAlign: 'center' as const, // Use 'as const' to narrow the type
    color: '#007BFF',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1.2rem',
    textAlign: 'center' as const,
    color: '#666',
    marginBottom: '40px',
  },
  section: {
    marginBottom: '40px',
  },
  sectionTitle: {
    fontSize: '1.8rem',
    color: '#007BFF',
    marginBottom: '15px',
  },
  text: {
    fontSize: '1.5rem',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  list: {
    paddingLeft: '20px',
  },
  listItem: {
    fontSize: '1.5rem',
    lineHeight: '1.6',
    marginBottom: '10px',
  },
  footer: {
    textAlign: 'center' as const,
    marginTop: '40px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
  },
  footerText: {
    fontSize: '1rem',
    color: '#666',
  },
};

export default DomainSuggestionsGuide;