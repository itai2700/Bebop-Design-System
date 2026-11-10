# העלאה לוורדפרס · seo-split-testing

החבילה מוכנה להעלאה ל-bebop.co.il דרך Novamira (`novamira-bebop-co-il`). ההעלאה עצמה לא בוצעה, כי החיבור דרש התחברות מחדש בסשן שבו המאמר נכתב.

## מה יש כאן

| קובץ | תפקיד |
|---|---|
| `article.md` | המאמר לקריאה ולאישור של איתי |
| `wp-content.html` | גוף הפוסט בבלוקים של Gutenberg, במבנה של המאמרים הקיימים באתר (בקצרה, גוף, מקורות, שאלות ותשובות) |
| `wp-meta.json` | כותרת, סלאג, תקציר, Rank Math, טקסונומיות, ACF, ALT ושאלות ה-FAQ |
| `bebop-seo-split-testing-hero.webp` | תמונה ראשית, 2400×1260 |
| `bebop-seo-split-testing-og.png` | og:image, 1200×630 |
| `bebop-seo-split-testing-body-1..4.webp` | תמונות הגוף, רוחב 1520 |
| `bebop-seo-split-testing-hero-master.png` | מאסטר 2400×1350 לארכיון |
| `src/` | מפרטים, צילומי המקור והסקריפטים שיצרו את התמונות |

## סדר ההעלאה

1. לוודא שאין פוסט קיים עם הסלאג `seo-split-testing`.
2. להעלות למדיה את ההירו, ה-og וארבע תמונות הגוף, עם ה-ALT מ-`wp-meta.json` ומ-`article.md`.
3. להחליף ב-`wp-content.html` את `{{BODY1_URL}}` עד `{{BODY4_URL}}` בכתובות שהתקבלו.
4. ליצור פוסט כ**טיוטה**: קטגוריה מדריכים (17), pillar SEO (36), topic SEO (25), `bb_pillar` = קידום אתרים, `bb_cluster` = seo-split-testing, ההירו כ-featured.
5. Rank Math: title, description, focus keyword, ו-og:image = קובץ ה-og.
6. לקרוא את הטיוטה בחזרה, להשוות את בלוק ה-FAQ לפוסט קיים (למשל 2531) ולבדוק תצוגה מקדימה בדסקטופ ובמובייל.
7. פרסום רק אחרי שאיתי עבר על המאמר ואישר.

## מה צריך אישור של איתי

- הטקסט עצמו. המאמר הוא עיבוד של מאמר מ-Search Engine Journal (מקור מצוין וקישור בפתיח), בלי סיפורים או טענות בגוף ראשון בשם איתי.
- תמונות הגוף הן הראשונות באתר, ולכן כדאי לבדוק איך התבנית מציגה `figure` ו-`table` לפני פרסום.
