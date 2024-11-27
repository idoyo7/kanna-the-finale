import { useEffect, useRef } from 'react';

function Page1_1() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch((err) => {
                console.error('Video playback failed:', err);
            });
        }
    }, []);

    return (
        <div>
            <video
                ref={videoRef}
                // className={styles.video}
                src="https://airikannalastconcert.s3.ap-northeast-1.amazonaws.com/Airi_kanna_Last_Concert_wallpaper.mp4?response-content-disposition=inline&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLW5vcnRoZWFzdC0xIkcwRQIhALhHk2I7Gh4HCBD1VSHKlwL%2BVDtn4cHYre%2BZVdxF1398AiADY7hOQgfFB5HHQRRe8%2BQjvfJbsNbjs5LjnFXMgVs0qCrLAwhJEAAaDDUzMzI2NzA0OTg3OSIMNYky0JZbEktpDjOPKqgDg6%2FbZxJDnNxyk0Q7nzgGWFfTQDmCogodb3nCvaZwgi6Je6QvILhhgbB6ahcp756bTVojdD2pDm8Ic3r5rJPLU%2F7heXC%2B%2Fo0%2B8RdvyJaqGmH2tMOSzxCbkTt0TXVnw%2BRg2MEdtOSNzzjE3LW%2BVvja4FJaAXXbmjv5gj%2FixTbIuTQhi1DTDOta2O0RG%2Fbc8FPEVWB%2F236vNJoficbI%2FA9C%2Bq7iEaALaae%2FvjI8fjItIPzg7ZCvvAef%2BliDp2kDVapH4Jft6BY9xlD0cbsNSVBvVNCkDZLq%2Ft3ZQzg9pyoNZeMR65hhAf65KzxfBB9QbHCi9RH7C5SVDaeByfdkaj2np8xA%2BHdXTexHJ%2FKSIOrHdJldGBPveHw1bRVufjHlAQrIigfY2DG3pWziiHw6YkBN4t9uT721AZxCEJj59e%2BW6JJxl3W8o4Nbqe6gRNyVEvAOYX4nSJ2%2F%2BHnt9C9mEFuHV2%2FXDp2DN55%2BQD4U6y9grNqYSKUEKitjJi%2FGaa6MVTIoDl%2BdnzZmPro64mRm09m87QOPVYaQDbqgIMAW%2F9xVQFjKGGwtZpVXlzDGw5q6BjrkAipWlU5NLBl07azhQAXpQ3hKnL0UPYRvtxSQ0eYwkEKwGfgAqN%2Fx8bnM2%2BpjcUPTGU72nRFUKbISO4CeZCbLSRp3MkAtcpL%2B5x0a3xXiFrAeBPJR3ZaulI8SYuiXyOxdqBUYPA%2Bz%2BczyY1fHCWA5lFOq4%2BPifr%2By5CIJBnQjSam5O%2FE5nFGSxtsHouVqXqhq1KeCxUcHD2V9Oxli%2FswmlcBViPPa%2BTT%2FXLtKTgDpBmsFmyVr7vnl8Ph%2BLGJL1twfN392DAoofB%2BGcv5K1EB4WBq5M2qFHAz98%2FxO%2BiNny96IKoG6GucaaeSAHvkMrQpJxKdrJt58CiS0xh9u7tepXox9lhWxbuWoJ36Tj4gsJ1fXEEgz9arcOXpkG9AwvVseAImmuoUi%2BnsrhyxwI1yUQsoKQ6wMFIYABAh5r8P16icmRm95jNFwUMOfD1HgQTTa0oigpO5s8v6RIVSSZwexn6odfdaF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAXYKJRNWLRDCCSYII%2F20241127%2Fap-northeast-1%2Fs3%2Faws4_request&X-Amz-Date=20241127T155105Z&X-Amz-Expires=43200&X-Amz-SignedHeaders=host&X-Amz-Signature=df583baf163dece95caf65120be82ef5f33695005b54ca458993b6b9fb1fdd6a"
                muted
                loop
                playsInline
                autoPlay
            />
        </div>
    );
}

export default Page1_1;
