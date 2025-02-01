import React, { useState, useEffect } from 'react';

type Domain = {
  name: string;
  godaddy: { price: string; link: string };
  hostinger: { price: string; link: string };
  namecheap: { price: string; link: string };
};

interface DomainPriceTableProps {
  promptId: string;
}

const DomainPriceTable: React.FC<DomainPriceTableProps> = ({ promptId }) => {
  const [domains, setDomains] = useState<Domain[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDomains = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/${promptId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await response.json();
        const updatedDomains = data.domains.map((domain: { name: string }) => ({
          name: domain.name,
          godaddy: { price: "999", link: `${import.meta.env.VITE_GODADDY_BASE_LINK}${domain.name}` },
          hostinger: { price: "499", link: "https://www.hostinger.in/domain-name-search" },
          namecheap: { price: "975", link: `${import.meta.env.VITE_NAMECHEAP_BASE_LINK}${domain.name}` },
        }));
        setDomains(updatedDomains);
      } catch (err) {
        setError('Failed to load domains');
      } finally {
        setLoading(false);
      }
    };

    if (promptId) {
      fetchDomains();
    }
  }, [promptId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Domain Price Comparison</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Domain Name</th>
            <th style={styles.th}>GoDaddy Price</th>
            <th style={styles.th}>Hostinger Price</th>
            <th style={styles.th}>Namecheap Price</th>
          </tr>
        </thead>
        <tbody>
          {domains.map((domain, index) => (
            <tr key={index}>
              <td style={styles.td}>{domain.name}</td>
              <td style={styles.td}>
                <a href={domain.godaddy.link} target="_blank" rel="noopener noreferrer" style={styles.link}>
                  {domain.godaddy.price}
                </a>
              </td>
              <td style={styles.td}>
                <a href={domain.hostinger.link} target="_blank" rel="noopener noreferrer" style={styles.link}>
                  {domain.hostinger.price}
                </a>
              </td>
              <td style={styles.td}>
                <a href={domain.namecheap.link} target="_blank" rel="noopener noreferrer" style={styles.link}>
                  {domain.namecheap.price}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    width: '60%',
    margin: '0 auto',
    marginTop: '20px',
    marginBottom: '20px',
    fontSize: '16px',
  }, 
  heading: {
    textAlign: 'center' as const,
    marginBottom: '20px',
    marginTop: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse' as const,
  },
  th: {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'center' as const,
    backgroundColor: '#f2f2f2',
  },
  td: {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'center' as const,
  },
  link: {
    color: '#333',
    textDecoration: 'none',
    display: 'block',
    width: '100%',
    height: '100%',
  },
};

export default DomainPriceTable;
