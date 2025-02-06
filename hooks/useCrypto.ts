export default function useCrypto() {
  const encrypt = (text: string, key: string): string => {
    try {
      let encrypted = "";
      for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i) + key.charCodeAt(i % key.length);
        encrypted += String.fromCharCode(charCode);
      }
      return btoa(encrypted);
    } catch {
      return "";
    }
  };

  function decrypt(text: string, key: string) {
    let decoded = atob(text);
    let decrypted: string = "";
    for (let i = 0; i < decoded.length; i++) {
      let charCode = decoded.charCodeAt(i) - key.charCodeAt(i % key.length);
      decrypted += String.fromCharCode(charCode);
    }
    return decrypted;
  }

  return { encrypt, decrypt };
}
