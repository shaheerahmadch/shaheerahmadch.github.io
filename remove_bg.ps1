Add-Type -AssemblyName System.Drawing

$inputPath = "c:\Users\Shaheer Ahmed\Desktop\shaheerahmadch.github.io\public\logo.png"
$outputPath = "c:\Users\Shaheer Ahmed\Desktop\shaheerahmadch.github.io\public\logo.png"

# Load image
$img = [System.Drawing.Bitmap]::FromFile($inputPath)

# Create a new bitmap with the same dimensions
$newImg = New-Object System.Drawing.Bitmap($img.Width, $img.Height)
$g = [System.Drawing.Graphics]::FromImage($newImg)
$g.DrawImage($img, 0, 0, $img.Width, $img.Height)

# Loop through pixels
for ($x = 0; $x -lt $newImg.Width; $x++) {
    for ($y = 0; $y -lt $newImg.Height; $y++) {
        $pixel = $newImg.GetPixel($x, $y)
        
        # Check if pixel is dark (close to black #0a0a0a)
        # Threshold: R, G, B all < 30
        if ($pixel.R -lt 30 -and $pixel.G -lt 30 -and $pixel.B -lt 30) {
            # Make transparent
            $newImg.SetPixel($x, $y, [System.Drawing.Color]::Transparent)
        }
    }
}

$img.Dispose()
$g.Dispose()

# Save new image (overwrite)
# We need to save to a temp file first because the original is locked by $img? 
# Actually $img is FromFile, which locks it. We disposed it.
# But let's save to temp just in case.
$tempPath = "c:\Users\Shaheer Ahmed\Desktop\shaheerahmadch.github.io\public\logo_temp.png"
$newImg.Save($tempPath, [System.Drawing.Imaging.ImageFormat]::Png)
$newImg.Dispose()

# Replace original
Move-Item -Path $tempPath -Destination $outputPath -Force

Write-Host "Background removed and saved to $outputPath"
