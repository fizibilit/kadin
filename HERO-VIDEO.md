# Hero videosu: prompt ve ölçüler

Hero, kaydırmayla çalışır: sayfa aşağı indikçe video ileri sarar, yukarı çıkınca geri sarar.
Video 10 saniye ise her 2 saniye, sitedeki bir yazı sahnesine denk gelir. Dosya yoksa sitede
kolaj görseli görünür; dosya eklenince otomatik devreye girer.

## Ölçüler

| | Değer |
|---|---|
| Oran | 16:9 yatay |
| Üretim | 1920×1080 (mümkünse Flow'da 4K'ya yükselt) |
| Süre | 10 sn |
| Ses | Yok |
| Metin | Videonun içinde yazı olmayacak, yazılar sitede üstüne biniyor |
| Yazı alanı | Kadrajın SOL %45'i sade, koyu ve odak dışı kalacak; yazılar orada okunacak |
| Hareket alanı | Ana hareket SAĞ %55'te olacak |
| Mobil | Orta %40 genişlik korunur; mobilde videonun ortasından 9:16 kesit alınır |

## Sahne eşleşmesi (kaydırdıkça yazı ile video birlikte ilerler)

| Video | Kaydırma | Sitede soldaki yazı | Sağda görünen |
|---|---|---|---|
| 0-2 sn | Giriş | Proje başlığı | Eski dergi kapağı, makro |
| 2-4 sn | Dergiler | "35 kadın dergisi" | Kapaklar yelpaze gibi açılıp duvara dizilir |
| 4-6 sn | Arşiv | "1.425 transkribe edilmiş metin" | Eski harfli sayfa, altın ışık taraması |
| 6-8 sn | Tipoloji | "4 katmanlı şiddet tipolojisi" | Dört katman, düğüm ağı, altın çubuklar |
| 8-10 sn | Harita | "Veriyi görerek keşfet" | Açık dergi, durgun kapanış |

## Prompt (Flow / Veo, İngilizce)

```
A 10-second cinematic short film, 16:9, photorealistic. Shot on 35mm anamorphic lenses, shallow depth of field, subtle film grain, chiaroscuro lighting from warm candle and tungsten practicals. Quiet, scholarly, museum-archive mood. Floating dust motes in the light. Color palette strictly limited to deep maroon (#4a1420), burgundy (#6d1f2b), antique gold (#b6863c, #d9b876) and aged parchment cream (#f6efe2).

FRAME LAYOUT (very important): the left 45% of the frame is a calm, dark, low-detail area: deep maroon shadow, soft out-of-focus bokeh, a gentle vignette, no bright highlights and no sharp details there, so white text can be read over it. All the action and every bright element lives in the right 55% of the frame. Nothing important crosses into the left 45%.

CAMERA: one single continuous, slow, perfectly steady forward dolly with a gentle upward arc. No cuts, no whip pans, no shaking, no speed changes. Constant pace, so the footage looks natural when played slowly forward and backward.

0-2s: Extreme macro on the right side of the frame: a weathered early-1900s Ottoman women's magazine cover on a dark wooden desk, ornate calligraphic masthead (abstract, unreadable). Warm light rakes across the paper fibers. The left side is dark and soft.
2-4s: The magazine rises. Dozens of vintage magazine covers (sepia and pastel illustrations of women in early-1900s dress, ornate borders) fan out in depth on the right side and settle into a floating wall of about 35 covers in layers. The camera glides forward.
4-6s: The camera slips into one open page of dense old Arabic-script text lines on the right. A soft golden light sweeps across the lines like a search beam. The lines glow gold and re-form into clean horizontal lines of Latin-style text (abstract, no legible words).
6-8s: The glowing lines lift off the page as thin gold threads and arrange into four translucent parchment-glass layers stacked in space on the right, joined by small gold nodes and fine connecting lines like a concept map. A few slender gold bars rise like an elegant bar chart.
8-10s: The camera rises and pulls back. All layers fold down into one open journal glowing softly gold on the desk, right of center. The last 1.5 seconds are almost still, calm and resolved.

NEGATIVE: no text, no letters, no numbers, no logos, no watermarks, no captions, no subtitles. No close-up faces. No violence, no blood, no injury, no distress. No modern objects, screens or phones. No bright objects on the left half. No fast motion, no flicker, no morphing artifacts, no cartoon or clay look, no oversaturated colors, no lens flares. Silent, no audio.
```

### Flow bir seferde 8 sn verirse

8 sn'yi üret, sonra Flow'un "Extend" özelliğiyle son 2 sn'yi ekle:
"Continue the same camera move: the layers fold down into one open journal glowing softly gold on the right of the frame, the final seconds almost still. Keep the left 45% dark and calm."

### Sonuç tutmazsa, sırayla dene

1. Sol taraf hâlâ parlaksa: "LEFT 45% IS DARK AND EMPTY" cümlesini en üste taşı.
2. Kesme veya sıçrama varsa: "ONE continuous shot, no cuts" cümlesini üç kez güçlendir.
3. Yazı gibi şekiller çıkıyorsa: negatif bölüme "no Arabic letters, no readable script" ekle.

## Videoyu siteye uygun hale getirme (ben yapacağım)

Normal web videosu kaydırırken takılır. Bu yüzden her 6 karede bir anahtar kare ile yeniden kodlanır:

```bash
# masaüstü
ffmpeg -i kaynak.mp4 -an -vf "scale=1920:-2,fps=30" -c:v libx264 -preset slow -crf 20 -g 6 -keyint_min 6 -sc_threshold 0 -pix_fmt yuv420p -movflags +faststart public/video/hero.mp4

# mobil (16:9 kaynaktan ortadan 9:16 kes)
ffmpeg -i kaynak.mp4 -an -vf "crop=ih*9/16:ih,scale=720:1280,fps=30" -c:v libx264 -preset slow -crf 22 -g 6 -keyint_min 6 -sc_threshold 0 -pix_fmt yuv420p -movflags +faststart public/video/hero-mobile.mp4
```
