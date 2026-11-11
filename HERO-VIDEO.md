# Hero videosu: prompt ve ölçüler

Hero, kaydırmayla çalışır: sayfa aşağı indikçe video ileri sarar, yukarı çıkınca geri sarar.
Dosya yoksa sitede kolaj görseli görünür; dosya eklenince otomatik devreye girer.

## Ölçüler

| | Değer |
|---|---|
| Oran | 16:9 yatay (masaüstü hero ~1440×836, oran 1,72:1) |
| Üretim | 1920×1080 (mümkünse Flow'da 4K'ya yükselt, 3840×2160) |
| Süre | 10 sn (Flow 8 sn verirse 8 sn de olur, hero her süreyle çalışır) |
| Ses | Yok |
| Metin | Videonun içinde yazı olmayacak, metinler sitede HTML olarak üstüne biniyor |
| Güvenli alan | Ana hareket merkezde ve sağda; sol 1/3 sade ve koyu (başlık orada duracak) |
| Mobil | Videonun orta %40 genişliği korunur; mobilde 9:16 orta kesit kullanılır |

## Dosya yolları

- `public/video/hero.mp4` : masaüstü
- `public/video/hero-mobile.mp4` : mobil (isteğe bağlı; yoksa hero.mp4 kullanılır)

## Flow'dan çıkan videoyu siteye uygun hale getirme (kaydırmada akıcı olsun diye)

Normal web videosu oynatırken güzel görünür ama kaydırırken takılır. Bu yüzden her 6 karede bir
anahtar kare ile yeniden kodlanır:

```bash
# masaüstü
ffmpeg -i kaynak.mp4 -an -vf "scale=1920:-2,fps=30" -c:v libx264 -preset slow -crf 20 -g 6 -keyint_min 6 -sc_threshold 0 -pix_fmt yuv420p -movflags +faststart public/video/hero.mp4

# mobil (16:9 kaynaktan ortadan 9:16 kes)
ffmpeg -i kaynak.mp4 -an -vf "crop=ih*9/16:ih,scale=720:1280,fps=30" -c:v libx264 -preset slow -crf 22 -g 6 -keyint_min 6 -sc_threshold 0 -pix_fmt yuv420p -movflags +faststart public/video/hero-mobile.mp4
```

## Kaydırma sahneleri (videodaki zamanlama ile eşleşir)

| Süre | Videoda | Sitede görünen metin |
|---|---|---|
| 0-2 sn | Eski dergi kapağı, makro | Proje başlığı |
| 2-4 sn | Kapaklar havada yelpaze gibi açılır (35 dergi) | "35 kadın dergisi" |
| 4-6 sn | Eski harfli sayfa, altın ışık taraması | "1.425 transkribe edilmiş metin" |
| 6-8 sn | Satırlar dört katmana ve düğüm ağına dönüşür | "4 katmanlı tipoloji" |
| 8-10 sn | Kamera yükselir, tek açık dergi, durgun kapanış | "Veriyi görerek keşfet" |

## Prompt (Flow / Veo, İngilizce)

```
Photorealistic cinematic macro film, 10 seconds, 16:9, shot on a 35mm anamorphic lens with shallow depth of field, subtle film grain and warm candlelight. Moody, scholarly museum-archive atmosphere, floating dust motes in warm light. Color palette strictly limited to deep maroon (#4a1420), burgundy (#6d1f2b), antique gold (#b6863c and #d9b876) and aged parchment cream (#f6efe2).

ONE single continuous, slow, perfectly steady forward dolly-in with a gentle upward arc. No cuts, no whip pans, no camera shake, no speed changes. The pace stays constant so the footage looks natural when played forward and backward.

0-2s: Extreme macro of a weathered early-1900s Ottoman women's magazine cover lying on a dark wooden desk. Ornate calligraphic masthead (abstract, not readable). Warm light rakes across the paper fibers.
2-4s: The magazine lifts gently. Dozens of other vintage magazine covers (sepia and pastel illustrations of women in early-1900s dress, ornate borders) rise and fan out in depth, settling into a floating wall of about 35 covers arranged in layers. The camera glides forward through them.
4-6s: The camera slips into one open page of dense old Arabic-script text lines. A soft golden light sweeps across the lines like a search beam. The lines glow gold and re-form into clean horizontal lines of Latin-style text (abstract, no legible words).
6-8s: The glowing lines lift off the page as thin gold threads and rearrange into four translucent parchment-glass layers stacked in space, joined by small gold nodes and fine connecting lines like a concept map. A few slender gold bars rise like an elegant bar chart.
8-10s: The camera rises and pulls back. All layers fold down into one open journal that glows softly gold on the desk. The final 1.5 seconds are almost still and calm.

Composition: key subject in the center and right of the frame. The left third of the frame stays darker and uncluttered (reserved for a text overlay). Keep the main action inside the central 40% of the width.

No text, no letters, no numbers, no logos, no watermarks, no captions. No close-up faces. No violence, no blood, no injury, no distress. No modern objects, screens or phones. No fast motion, no flicker, no morphing artifacts, no cartoon or clay look, no oversaturated colors, no lens flares. Silent, no audio.
```

### Flow en fazla 8 sn veriyorsa

Aynı prompt'u kullan, ilk satırdaki "10 seconds" yerine "8 seconds" yaz ve zamanları şöyle değiştir:
0-1.6s, 1.6-3.2s, 3.2-4.8s, 4.8-6.4s, 6.4-8s. Ya da 8 sn'yi üretip Flow'un
"Extend" özelliğiyle son 2 sn'yi ekle: "Continue the same camera move: the layers fold down into one open journal glowing softly gold, final seconds almost still."
