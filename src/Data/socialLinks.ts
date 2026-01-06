import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export type SocialLinks = {
  github?: string;
  linkedin?: string;
  instagram?: string;
  youtube?: string;
  twitter?: string;
  email?: string;
};

export async function getSocialLinks(): Promise<SocialLinks> {
  try {
    const ref = doc(db, "settings", "socialLinks");
    const snapshot = await getDoc(ref);

    if (!snapshot.exists()) {
      console.warn("⚠️ socialLinks document not found");
      return {};
    }

    return snapshot.data() as SocialLinks;
  } catch (error) {
    console.error("❌ Failed to fetch social links:", error);
    return {};
  }
}
