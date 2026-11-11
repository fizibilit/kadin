# Hero videosu

Hero, kaydırmayla çalışır: sayfa aşağı indikçe video ileri sarar, yukarı çıkınca geri sarar.
Video 10 saniyedir ve her 2 saniye, sitedeki bir yazı sahnesine denk gelir.

## Dosyalar

- `public/video/hero.mp4`: masaüstü, 1920×1080, sessiz, her 6 karede bir anahtar kare (kaydırmada takılmasın diye)
- `public/video/hero-mobile.mp4`: mobil, 720×1280, masaüstü videonun sağ-orta dikey kesiti
- Dosya yoksa ya da yüklenemezse hero, `images/hero-collage.png` ile aynı akışta çalışır.

## Konsept: geç dönem Osmanlı'da kadınların hikâyesi

Kitap/dergi kapağı yok. Bir kadının mektubu, matbaada basılı sayfaya, oradan arşive ve gün doğumunda
İstanbul'da birlikte yürüyen kadınlara dönüşüyor. Sol %45 yazı için koyu ve sakin, tüm hareket sağda.

| Video | Kaydırma | Sitede soldaki yazı | Sağda görünen |
|---|---|---|---|
| 0-2 sn | Giriş | Proje başlığı | Boğaz'a bakan şebekeli pencerede kadın silüeti, mum |
| 2-4 sn | Dergiler | "35 kadın dergisi" | Mektup yazan el, kadınların mektupları yığılır |
| 4-6 sn | Arşiv | "1.425 transkribe edilmiş metin" | Matbaa, harf dizen eller, basılı sayfa |
| 6-8 sn | Tipoloji | "4 katmanlı şiddet tipolojisi" | Basılı sayfalar havada dört katman olur, altın ışıklar |
| 8-10 sn | Harita | "Veriyi görerek keşfet" | Gün doğumunda İstanbul, kıyıda birlikte yürüyen kadınlar |

## Flow / Veo prompt'u (kullanılan)

```
A 10-second cinematic, literary short film about the story of Ottoman women at the turn of the 20th century, set in Istanbul, photorealistic, 16:9. Shot on 35mm anamorphic lenses, shallow depth of field, soft film grain, candlelight and dawn light chiaroscuro. Poetic, quiet, dignified mood, like a frame from a historical drama. Color palette limited to deep maroon, burgundy, antique gold and aged parchment cream. FRAME LAYOUT (very important): the left 45% of the frame is a calm, dark, low-detail area: deep shadow of a wooden wall or heavy curtain, soft out-of-focus bokeh, a gentle vignette, no bright highlights and no sharp details, so white text can be read over it. All the action and every bright element lives in the right 55% of the frame. CAMERA: one single continuous, slow, perfectly steady glide with a gentle upward arc. No cuts, no whip pans, no shaking, no speed changes, constant pace so it looks natural when played slowly forward and backward. 0-2s: Pre-dawn inside a wooden Ottoman mansion room. On the right, a woman in an early-1900s long dress and light veil, seen from behind as a silhouette, sits at a carved wooden lattice window; faint mist over the Bosphorus beyond; a candle flickers; she lifts a pen. 2-4s: Close on her hand writing a letter in elegant Ottoman script with a dip pen, ink glistening in the candlelight. The folded letter is passed from hand to hand (only hands visible), and dozens of handwritten letters from many women drift and pile up on a lamplit editor's desk on the right. 4-6s: An old printing press: hands set lead type, ink rollers turn, a sheet of newsprint with dense Ottoman script is peeled from the press. A soft golden light sweeps across the printed lines, which glow and re-form into clean horizontal lines of Latin-style text (abstract, unreadable). 6-8s: Printed sheets lift from the press and float, arranging into four translucent paper layers stacked in space on the right, connected by thin glowing gold threads and small nodes like a quiet constellation. 8-10s: The camera drifts back and out through the window to Istanbul at dawn: warm golden light on the Bosphorus, and on the right a group of women in early-1900s dress walking together as silhouettes along the shore, away from the camera. The last 1.5 seconds are almost still, hopeful and resolved. NEGATIVE: no text, no letters or numbers, no logos, no watermarks, no captions. No book covers, no magazine covers. No close-up faces (silhouettes, backs of heads and hands only). No violence, no blood, no injury, no distress. No modern objects, screens or phones. No bright objects on the left half. No fast motion, no flicker, no morphing artifacts, no cartoon look, no oversaturated colors, no lens flares. Silent, no audio.
```

Flow ayarı: Omni 1.2 Flash, 16:9, 720p, 10 sn, x1 (30 kredi).

## Videoyu değiştirmek istersen

Flow'dan indirilen mp4'ü şu komutlarla yeniden kodla (normal web videosu kaydırırken takılır):

```bash
# masaüstü
ffmpeg -i kaynak.mp4 -an -vf "scale=1920:1080:flags=lanczos,unsharp=5:5:0.4" -c:v libx264 -preset slow -crf 20 -g 6 -keyint_min 6 -sc_threshold 0 -pix_fmt yuv420p -movflags +faststart public/video/hero.mp4

# mobil (sağ-orta dikey kesit)
ffmpeg -i kaynak.mp4 -an -vf "crop=ih*9/16:ih:(iw-ih*9/16)*0.88:0,scale=720:1280:flags=lanczos" -c:v libx264 -preset slow -crf 22 -g 6 -keyint_min 6 -sc_threshold 0 -pix_fmt yuv420p -movflags +faststart public/video/hero-mobile.mp4
```
