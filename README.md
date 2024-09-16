# Android Virtual Device (AVD) Setup

## Prerequisites

Ensure that you have the Android SDK installed and properly configured. Your environment variables should be set up as follows:

```bash
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator:$ANDROID_HOME/platform-tools:$ANDROID_HOME/cmdline-tools/latest/bin
```

## Creating a Pixel 2 AVD with Android API 34

1. **Open your terminal**.

2. **Create the AVD**:

   ```bash
   avdmanager create avd -n pixel_2_api34 -k "system-images;android-34;google_apis_playstore;x86_64" -d pixel_2
   ```

   - `-n pixel_2_api34`: The name of the new AVD.
   - `-k "system-images;android-34;google_apis_playstore;x86_64"`: Specifies the Android 14 (API level 34) system image.
   - `-d pixel_2`: Specifies the device type as Pixel 2.

3. **Verify the AVD Creation**:

   To ensure that the AVD has been created successfully, list all available AVDs with:

   ```bash
   emulator -list-avds
   ```

   You should see `pixel_2_api34` in the list.

4. **Run the New AVD**:

   Start the newly created `pixel_2_api34` AVD with:

   ```bash
   emulator -avd pixel_2_api34
   ```

   This will launch the Android emulator with the specified AVD.

## Troubleshooting

If you encounter issues with running the AVD or it does not appear in the list, ensure that your Android SDK and environment variables are correctly configured. You may also need to check for available system images if you run into any errors.
