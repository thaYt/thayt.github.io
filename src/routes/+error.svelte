<script>
    import { page } from '$app/stores';
</script>

<main>
    <style>
        * {
            background-color: rgb(20, 24, 33);
        }
        </style>
    <h1>uh oh!! u messed up</h1>

    <p>{$page.status}: {$page.error.message}</p>
</main>

<style>
    * {
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        color: white;
    }
</style>